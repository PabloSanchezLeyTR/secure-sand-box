const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
 
function initializeFinalReport(finalReportPath) {
  if (!fs.existsSync(finalReportPath)) {
    fs.writeFileSync(finalReportPath, JSON.stringify({ issues: [] }, null, 2));
  }
}
 
function runLinterAndMerge(filePath, singleReportPath, finalReportPath) {
  const license = 'eyJjb21wYW55TmFtZSI6IlRob21zb24gUmV1dGVycyIsImV4cGlyZXMiOiIyMDI1LTExLTI4VDE4OjMwOjAwLjAwMFoifQ==.37CsNzP8bnyNMdaL5OIBE3p0SeqshjEFefLoCYak2Wm6VbV8dAjPEcT3yO0RkbKsuh6+ZQz+gseb5qUFEwxSmw==';
 
  try {
    // Run axe-linter on the file and capture output
    if (filePath) {
      execSync(`npx axe-linter-connector -s ${filePath} -d . --local --license-key=${license} --url=https://axe-linter.deque.com`, { encoding: 'utf8' });
    }
 
    if (!fs.existsSync(singleReportPath)) {
      console.warn(`Warning: Report file ${singleReportPath} was not generated`);
      return;
    }
 
    const newReport = JSON.parse(fs.readFileSync(singleReportPath, 'utf8'));
    const finalReport = JSON.parse(fs.readFileSync(finalReportPath, 'utf8'));
 
    // Merge issues
    if (newReport.issues && Array.isArray(newReport.issues)) {
      finalReport.issues.push(...newReport.issues);
    }
 
    // Write back the merged report
    fs.writeFileSync(finalReportPath, JSON.stringify(finalReport, null, 2));
 
    // If there are issues, save a timestamped copy in .axe-reports/
    if (finalReport.issues.length > 0) {
      const reportsDir = path.resolve('.axe-reports');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir);
      }
 
      const timestamp = Date.now();
      const destPath = path.join(reportsDir, `axe-report-${timestamp}.json`);
 
      fs.writeFileSync(destPath, JSON.stringify(finalReport, null, 2));
      console.log(`Saved axe report with issues at: ${destPath}`);
    }
 
  } catch (error) {
    console.error(`❌ Axe-linter failed:`, error.message);
    process.exit(1);
  }
}

function mergeReports(singleReportPath, finalReportPath) {
  try {
    if (!fs.existsSync(singleReportPath)) {
      console.warn(`Warning: Report file ${singleReportPath} was not found`);
      return;
    }

    if (!fs.existsSync(finalReportPath)) {
      initializeFinalReport(finalReportPath);
    }

    const newReport = JSON.parse(fs.readFileSync(singleReportPath, 'utf8'));
    const finalReport = JSON.parse(fs.readFileSync(finalReportPath, 'utf8'));

    // Merge issues
    if (newReport.issues && Array.isArray(newReport.issues)) {
      finalReport.issues.push(...newReport.issues);
    }

    // Write back the merged report
    fs.writeFileSync(finalReportPath, JSON.stringify(finalReport, null, 2));
    console.log(`Successfully merged reports`);
    
  } catch (error) {
    console.error(`❌ Error merging reports:`, error.message);
    process.exit(1);
  }
}
 
// If running from command line
if (require.main === module) {
  // Check arguments count to determine which function to call
  if (process.argv.length === 4) {
    // If 2 arguments provided, assume they are singleReportPath and finalReportPath
    const singleReportPath = process.argv[2];
    const finalReportPath = process.argv[3];
    
    console.log(`Merging reports from ${singleReportPath} to ${finalReportPath}`);
    mergeReports(singleReportPath, finalReportPath);
  } else if (process.argv.length === 5) {
    // If 3 arguments provided, use the original functionality
    const filePath = process.argv[2];
    const singleReportPath = process.argv[3];
    const finalReportPath = process.argv[4];
    
    if (!filePath) {
      console.error('Please provide a file path');
      process.exit(1);
    }
    
    console.log(`Processing file: ${filePath}`);
    initializeFinalReport(finalReportPath);
    runLinterAndMerge(filePath, singleReportPath, finalReportPath);
  } else {
    console.error('Incorrect number of arguments');
    console.error('Usage: node merge-reports.js singleReportPath finalReportPath');
    console.error('   or: node merge-reports.js filePath singleReportPath finalReportPath');
    process.exit(1);
  }
}