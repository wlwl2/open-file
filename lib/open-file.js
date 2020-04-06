'use babel'

import { CompositeDisposable } from 'atom'
const open = require('open')

export default {
  subscriptions: null,
  activate (state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'open-file:open': () => this.open()
    }))
  },
  deactivate () {
    this.subscriptions.dispose()
  },
  open () {
    // View the selected file in tree view in default web browser.
    const selectedFileTreeView = document.querySelector('.list-item.selected span')
    if (selectedFileTreeView) {
      open(selectedFileTreeView.getAttribute('data-path'))
      return
    }
    
    const activeTab = document.querySelector('.texteditor.tab.active .title')
    
    if (activeTab) {
      open(activeTab.getAttribute('data-path'))
      return
    }
  }
}
