const spawnSync = require('cross-spawn').sync
const { resolveBin, appDirectory } = require('bebbi-scripts')
const path = require('path')

// Using gig-utils/.storybook
// const storyConfigPath = path.join(__dirname, '../config/.storybook')

// Using msm-editor/.storybook
// (This approach requires the deps and "babel" key in msm-editor/package.json)
const storyConfigPath = `${appDirectory}/.storybook`

const args = ['dev', '-p', '6006', '-c', storyConfigPath, '--no-open']

const result = spawnSync(resolveBin('storybook'), args, {
  stdio: 'inherit',
})

if (result.error) {
  console.error('Error running Storybook:', result.error)
  process.exit(1)
}

process.exit(result.status ?? undefined)
