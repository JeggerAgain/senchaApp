/**
 * Created by johngaffney on 07/06/15.
 */
Ext.define("NotesApp.view.NotesList", {
    extend: "Ext.dataview.List",
    alias: "widget.noteslist",
    config: {
        loadingText: "Loading Notes...",
        empty: '<div class = "notes-list-empty-text">No Notes Found.</div><pre>',
        onItemDisclosure: true,
        itemTpl: '</pre> <div class="list-item-title">{title}</div><div class="list-item-narrative">{narrative}</div><pre>'
    }
})