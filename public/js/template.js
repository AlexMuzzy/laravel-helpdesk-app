$(document).ready(function () {
    $('#resultsTable').DataTable();
    /*
    // Execute something when the modal window is shown.
    $('#formModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var recipient = button.data('value'); // Extract info from data-* attributes
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text('Case ' + recipient);
        modal.find('.modal-body input').val(recipient);
    });
    */
    $('.form-control').addClass('shadow rounded border-0');
    $('.modal').addClass('border-0');
    $(function () {
        $("#inputSolved").change(function () {
            var val = $(this).val();
            if (val === "pilot_graph_form") {
                $("#pilot_graph_form").show();
                $("#client_graph_form").hide();
            } else if (val === "client_form") {
                $("#client_graph_form").show();
                $("#pilot_graph_form").hide();
            }
        });
    });
});