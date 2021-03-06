/**
 * Created by johngaffney on 08/06/15.
 */
Ext.define("NotesApp.model.Note", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated', type: 'date', dateFormat: 'c'},
            {name: 'title', type: 'String'},
            {name: 'narrative', type: 'string'}
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'title', message: 'Please enter a title for this note.'}
        ]
    }
});