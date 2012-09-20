var m = {};
builder.translate.addLocale({'name':'en-US', 'title': "English", 'mapping': m});

// General
m.ok = "OK";
m.cancel = "Cancel";

// Locale selection GUI
m.select_locale = "Select language";
m.new_locale_after_restart = "Language will change after Builder restart.";

// Startup view
m.open_script_or_suite = "Open a script or suite";
m.view_command_table = "View supported commands for Selenium 1 & 2";
m.manage_plugins = "Manage plugins"
m.start_recording_at = "Start recording at";
m.cookie_warning = "This will delete all cookies for the domain you're recording for.";

// Steps table
m.steps_table = "Steps Table";
m.show_step_type_orphans = "Show Selenium 1 steps that have no corresponding Selenium 2 step.";
m.step_name = "Name";
m.sel_1_translation = "Selenium 1 Translation";
m.negatable = "Negatable";
m.local_playback_available = "Local Playback";
m.yes = "yes"; // Yes means yes.
m.no = "no";   // No means no.
               // Oh no! Politics in our source code!

// Plugins
m.plugins_title = "Plugins";
m.plugins_back = "Back";
m.plugins_refresh = "Refresh";
m.plugins_loading = "Loading...";
m.plugins_downloading = "Downloading...";
m.plugin_disabled = "Disabled";
m.plugin_installed = "Installed";
m.plugin_installed_to_enable = "Installed, Enabled after Restart";
m.plugin_installed_to_disable = "Installed, Disabled after Restart";
m.plugin_not_installed = "Not Installed";
m.plugin_to_install = "Installed after Restart";
m.plugin_to_uninstall = "Uninstalled after Restart";
m.plugin_to_update = "Installed, Updated after Restart";
m.plugin_update_available = ", update to version {0} available";
m.plugin_install = "Install";
m.plugin_cancel_install = "Cancel Install";
m.plugin_uninstall = "Uninstall";
m.plugin_cancel_uninstall = "Cancel Uninstall";
m.plugin_update = "Update";
m.plugin_cancel_update = "Cancel Update";
m.plugin_enable = "Enable";
m.plugin_disable = "Disable";
m.plugin_list_too_new = "Plugin list data format is too new. Please upgrade Builder.";
m.unable_to_fetch_plugins = "Unable to fetch plugins";
m.plugin_url_not_found = "not found";
m.plugin_missing_dir = "Plugin directory at {0} missing.";
m.plugin_not_a_dir = "Plugin directory at {0} is not a directory, it's a file.";
m.plugin_header_missing = "Plugin header at {0} missing.";
m.plugin_header_not_file = "Plugin header at {0} is not a file.";
m.plugin_header_file_corrupted = "Header file at {0} is corrupted, has a syntax error, or is not a JSON file: {1}";
m.plugin_header_file_no_version = "Header file at {0} has no header version.";
m.plugin_builder_too_old = "This version of Builder is too old to use this plugin. Please upgrade to the newest version.";
m.plugin_id_mismatch = "The plugin ID in the header ({0}) does not match the expected ID ({1}).";
m.plugin_cant_verify = "Unable to verify plugin: {0}";
m.plugin_unable_to_install = "Could not install {0}: {1}";
m.plugin_unable_to_uninstall = "Could not uninstall {0}: {1}";
m.plugin_disabled_builder_too_old = "Disabled plugin \"{0}\": This version of Builder is too old for this plugin.\nMinimum supported Builder version: {1}. Current Builder version: {2}.\nPlease update Builder, then re-enable the plugin.";
m.plugin_disabled_builder_too_new = "Disabled plugin \"{0}\": This version of the plugin is too old.\nMaximum supported Builder version: {1}. Current Builder version: {2}.\nTry updating the plugin.";

// Menus
m.menu_file = "File";
m.menu_record = "Record";
m.menu_run = "Run";
m.menu_suite = "Suite";
m.menu_save = "Save";
m.menu_convert = "Convert to other version...";
m.menu_discard = "Discard and start over";
m.menu_run_locally = "Run test locally";
m.menu_run_on_rc = "Run on Selenium Server";
m.menu_run_suite_locally = "Run suite locally";
m.menu_run_suite_on_rc = "Run suite on Selenium Server";
m.menu_suite_remove_script = "Remove current script";
m.menu_add_script_from_file = "Add script from file";
m.menu_record_new_script = "Record new script";
m.menu_discard_suite = "Discard and start over";
m.menu_save_suite = "Save suite";
m.menu_save_suite_as = "Save suite as...";
m.lose_changes_warning = "If you continue, you will lose all your recent changes.";

// Script
m.untitled_script = "Untitled Script";

// Step display
m.suite_has_unsaved_changes = "Suite has unsaved changes.";
m.suite_cannot_save_unsaved_scripts = "Can't save suite: Save all scripts to disk as HTML first.";
m.cannot_save_suite_due_to_mixed_versions = "Can't save suite: All scripts must be Selenium 1 scripts.";
m.stop_playback = "Stop Playback";
m.stopping = "Stopping...";
m.clear_results = "Clear Results";
m.connecting = "Connecting...";
m.record_verification = "Record a verification";
m.stop_recording = "Stop recording";

// Convert dialog
m.script_conversion = "Conversion";
m.the_following_steps_cant_be_converted = "The following steps can't be converted";

// Export dialog
m.choose_export_format = "Choose export format";
m.sel2_unsaveable_steps = "This script contains steps that can't be saved as Selenium 2 yet";
m.save = "Save";
m.unsupported_steps = "Unsupported";
m.save_as_X_to_Y = "Save as {0} to {1}";

// RC dialog
m.run_script = "Run";
m.selenium_rc_settings = "Selenium RC Settings";
m.rc_server_host_port = "Host:Port of RC Server";
m.rc_browser_string = "Browser String";
m.rc_browser_version = "Browser Version";
m.rc_platform = "Platform";

// Record dialog
m.start_recording_new_script_at = "Start recording a new script at";

// Run all dialog
m.view_run_result = "View Result";
m.running_scripts = "Running scripts...";
m.stop = "Stop";
m.close = "Close";
m.done_exclamation = "Done!";

// Suite
m.cant_save_suite_must_save_as_html = "Can't save suite. Please save all test scripts to disk as HTML first.";
m.cant_save_suite_must_be_sel1 = "Can't save suite: All scripts in the suite must be Selenium 1 scripts.";

// Gui
m.unsaved_changes_warning = "Any unsaved changes will be lost!";

// UI
m.unable_to_read_file = "Unable to read file, sorry.";
m.select_a_file = "Select a File";

// Record
m.record_invalid_url = "The URL is not valid and cannot be loaded.";

// Sel 1
m.sel1_could_not_open_suite_script = "Could not open suite: Could not open script {0}";
m.sel1_couldnt_save_suite = "Could not save suite.";
m.sel1_couldnt_export_script = "Could not export script:\n{0}";
m.sel1_playback_failed = "Failed";
m.sel1_unknown_failure_reason = "Unknown Failure Reason";
m.sel1_test_stopped = "Test stopped";

// Sel 2
m.save_as = "Save as...";
m.sel2_cant_export_step_type = "Cannot export step of type \"{0}\".";
m.sel2_variable_not_set = "Variable not set: {0}.";
m.sel2_text_not_present = "Text not present.";
m.sel2_body_text_does_not_match = "Body text does not match.";
m.sel2_element_not_found = "Element not found.";
m.sel2_source_does_not_match = "Source does not match.";
m.sel2_element_text_does_not_match = "Element text does not match.";
m.sel2_url_does_not_match = "URL does not match.";
m.sel2_title_does_not_match = "Title does not match.";
m.sel2_element_not_selected = "Element not selected.";
m.sel2_element_value_doesnt_match = "Element value does not match.";
m.sel2_attribute_value_doesnt_match = "Attribute value does not match.";
m.sel2_cookie_value_doesnt_match = "Cookie value does not match.";
m.sel2_no_cookie_found = "No cookie found with this name.";
m.sel2_step_not_implemented_for_playback = "{0} not implemented for playback.";
m.sel2_is = "is";
m.sel2_true = "true";
m.sel2_false = "false";
m.sel2_untitled_run = "Untitled";
m.sel2_server_error = "Server Error";

// Step display
m.param_expr_info = "<br>Parameter expressions of the form <i>${varname}</i> are replaced by the contents of the variable <i>varname</i>";
m.negate_assertion_or_verification = "Negate assertion/verification";
m.find_a_different_target = "Find a different target";
m.suggested_locator_alternatives = "Suggested alternatives:";
m.step_edit_type = "edit type";
m.step_delete = "delete step";
m.step_new_above = "new step above";
m.step_new_below = "new step below";
m.step_run = "run step";
m.step_run_from_here = "run from here";
m.step_run_to_here = "run to here";
m.playback_not_supported_warning = "Warning: playback not supported for this step type.";
m.edit_p = "edit {0}";
m.not = "not";