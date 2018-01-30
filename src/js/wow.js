#=include '../node_modules/jquery/dist/jquery.min.js'

$(document).ready(function() {
    console.log("ready!");

    // Settings for the Wow Grid.
    var wow = {
        editor: '.ou-justedit-region',                  // Edit region class, tag, or id.
        editFocus: '.mce-content-body.mce-edit-focus',  // Focused region class, tag, or id.
        section: '.section',                            // Section class name
        row: '.row',                                    // Row class name
        column: '.column',                              // Column class name
        module: '.module',                              // Module class name
        sidebar: '.sidebar',                            // Sidebar class name.
        leftSide: '.left-sidebar',                      // Left sidebar class name
        rightSide: '.right-sidebar',                    // Right sidebar class name

    };

    // Changes the Wow Grid settings.
    function wowSet() {

    }

    // Waits for the editor to load.
    function wowWait() {
        if($(wow.editor + wow.editFocus).length) {
            console.log("Editor is now focused");
            setTimeout(function() {
                wowEdit();
            }, 0);
        } else {
            setTimeout(function() {
                console.log("Waiting to edit...");
                wowWait();
            }, 150);
        }
    } wowWait();

    // Loads up the editor.
    function wowEdit() {
        console.log("Now ready to edit");

        //-------------------------------
        // initializes the HTML strings
        #=include 'wow-editor/wow-menus.js'

        //-------------------------------
        // initialize Sortable ----------
        #=include '../node_modules/html5sortable/dist/html.sortable.min.js'

        //-------------------------------
        // initialize basic Wow Grid editor
        #=include 'wow-editor/wow-content.js'
    }
});
