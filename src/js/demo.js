// Script for setting up demo.
$(document).ready(function() {
    // Sets the background color classes.
    wowStylesBackgroundSet({
        grayscale: {
            white: "white",
            transparentWhite: "white-transparent",
            gray: "gray",
            lighterGray: "gray-tint",
            darkerGray: "gray-shade",
            transparentGray: "gray-transparent",
            black: "black",
            transparentBlack: "black-transparent"
        },

        primary: {
            default: "primary",
            lighter: "primary-tint",
            darker: "primary-shade",
            saturated: "primary-strong",
            desaturated: "primary-weak",
            transparent: "primary-transparent"
        },

        secondary: {
            default: "secondary",
            lighter: "secondary-tint",
            darker: "secondary-shade",
            saturated: "secondary-strong",
            desaturated: "secondary-weak",
            transparent: "secondary-transparent"
        },

        alternate: {
            default: "alternate",
            lighter: "alternate-tint",
            darker: "alternate-shade",
            saturated: "alternate-strong",
            desaturated: "alternate-weak",
            transparent: "alternate-transparent"
        },

        accent: {
            default: "accent",
            lighter: "accent-tint",
            darker: "accent-shade",
            saturated: "accent-strong",
            desaturated: "accent-weak",
            transparent: "accent-transparent"
        },

        success: {
            default: "success",
            lighter: "success-tint",
            darker: "success-shade",
            saturated: "success-strong",
            desaturated: "success-weak",
            transparent: "success-transparent"
        },

        warning: {
            default: "warning",
            lighter: "warning-tint",
            darker: "warning-shade",
            saturated: "warning-strong",
            desaturated: "warning-weak",
            transparent: "warning-transparent"
        },

        alert: {
            default: "alert",
            lighter: "alert-tint",
            darker: "alert-shade",
            saturated: "alert-strong",
            desaturated: "alert-weak",
            transparent: "alert-transparent"
        }
    });

    // Sets the collapse classes.
    wowStylesCollapseSet({
        collapseRowHorizontally: "row-collapse-horizontal",
        collapseRowVertically: "row-collapse-vertical",
        collapseColumns: "row-collapse-columns"
    });

    // Gets the correct prompts.
    wow.strings = "https://homr0.github.io/wow-grid/js/grid.html";

    // Initiates editor.
    $('.ou-btn.button').on('click', function() {
        $(this).parent().addClass('ou-justedit-region mce-content-body mce-edit-focus');
    });

    // Emulates the save functionality.
    $('[aria-label="Save and Exit"]').on('click', function() {
        console.log("Saved the document.");
    });

    // Emulates the exit without saving functionality
    $('[aria-label="Exit Without Saving"]').on('click', function() {
        $('.ou-justedit-region.mce-content-body').removeClass('ou-justedit-region mce-content-body');
    });
});
