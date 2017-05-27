'use babel'

// import ViewInBrowserView from './view-in-browser-view'
import { CompositeDisposable } from 'atom'
const opn = require('opn')

export default {
  // viewInBrowserView: null,
  // modalPanel: null,
  subscriptions: null,
  activate (state) {
    // this.viewInBrowserView = new ViewInBrowserView(state.viewInBrowserViewState)
    // this.modalPanel = atom.workspace.addModalPanel({
    //   item: this.viewInBrowserView.getElement(),
    //   visible: false
    // })
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'open-file:open': () => this.open()
    }))
  },
  deactivate () {
    // this.modalPanel.destroy()
    this.subscriptions.dispose()
    // this.viewInBrowserView.destroy()
  },
  // serialize () {
  //   return {
  //     viewInBrowserViewState: this.viewInBrowserView.serialize()
  //   }
  // },
  open () {
    // console.log(atom.keymaps.getKeyBindings())

    // View the selected file in tree view in default web browser.
    const selectedFileTreeView = document.querySelector('.list-item.selected span')
    if (selectedFileTreeView) {
      opn(selectedFileTreeView.getAttribute('data-path'))
      return
    }
    const activeTab = document.querySelector('.texteditor.tab.active .title')
    if (activeTab) {
      opn(activeTab.getAttribute('data-path'))
      return
    }
    // return (
    //   this.modalPanel.isVisible() ? this.modalPanel.hide() : this.modalPanel.show()
    // )
  }
}
