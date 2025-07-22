const spawnSync = require('cross-spawn').sync
const { resolveBin } = require('bebbi-scripts')

// Pass flags for filtering, watch, etc.. See https://storybook.js.org/docs/writing-tests/integrations/test-runner#cli-options.
const args = process.argv.slice(2)

const result = spawnSync(
  resolveBin('@storybook/test-runner', { executable: 'test-storybook' }),
  args,
  {
    stdio: 'inherit',
  },
)

if (result.error) {
  console.error('Error running Storybook test runner:', result.error)
  process.exit(1)
}

process.exit(result.status ?? undefined)
