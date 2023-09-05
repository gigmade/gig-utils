#!/usr/bin/env node

import { spawnScript, help } from 'bebbi-scripts'

const [executor, , script] = process.argv

if (script && script !== '--help' && script !== 'help') {
  try {
    spawnScript(executor, script, __dirname)
  } catch (err) {
    try {
      spawnScript(executor, script)
    } catch (err) {
      help()
    }
  }
}
