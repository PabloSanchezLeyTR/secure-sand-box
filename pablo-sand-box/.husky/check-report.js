const fs = require('fs');

try {
  const finalReportPath = process.argv[2];
  if(!fs.existsSync(finalReportPath)){
    fs.writeFileSync(finalReportPath, '{"issues":[]}');
  }
  const report = JSON.parse(fs.readFileSync(finalReportPath, 'utf8'));
  const issuesCount = report.issues.length;
  
  if (issuesCount > 0) {
    console.error(`❌ Found ${issuesCount} accessibility issues. Check ${finalReportPath} for more details.`);
    process.exit(1);
  }
  console.error(`✅ No accessibility issues found.`);
  process.exit(0);
} catch (error) {
  console.error('Error reading or parsing report:', error);
  process.exit(1);
}