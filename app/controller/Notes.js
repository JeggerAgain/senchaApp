/**
 * Created by johngaffney on 07/06/15.
 */
Ext.define("NotesApp.controller.Notes", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            notesListContainer: "noteslistcontainer"
        },
        control: {
            notesListContainer: {
                newNoteCommand: "onNewNoteCommand",
                editNoteCommand: "onEditNoteCommand"
            }
        }
    },
    onNewNoteCommand: function () {
        console.log("onNewNoteCommand");
    },
    onEditNoteCommand: function (list, record) {
        console.log("onEditNoteCommand");
    },
    onNotesListDisclose: function (list, record, target, index, evt, options) {
        console.log("editNoteCommand");
        this.fireEvent('editNoteCommand', this, record);
    },

    launch: function () {
        this.callParent(arguments);
        Ext.getStore("Notes").load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});
