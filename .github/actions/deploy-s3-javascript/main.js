const core = require("@actions/core");
// const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // 1) Get some input values.
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // 2) Upload files.
  const s3Uri = `s3://${bucket}`;
  // exec.exec(`aws s3 sync ${distFolder} ${bucket} --region ${bucketRegion}`)

  // 3) Dynamically construct the website URL.
  const websiteUrl = `https://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput("website-url", websiteUrl);

  core.notice("Hello from my custom Javascript Action");
}

run();