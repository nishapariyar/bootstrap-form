$(document).ready(function() {

    function maandinkomenpartnerShow() {
        if ($('#partner_ja').is(':checked')) {
            $('#maandinkomen_partner').show();
            $('#maandinkomen_partner').css({ "display": "flex" });
            $(".form-check-input.maandinkomen_partner").prop('required', true);
        } else {
            $('#maandinkomen_partner').hide();
            $(".form-check-input.maandinkomen_partner").prop('required', false);
        }
    }

    function maandinkomenpartnerHide() {
        if ($('#partner_nee').is(':checked')) {
            $('#maandinkomen_partner').hide();
            $(".form-check-input.maandinkomen_partner").prop('required', false);
        } else {
            $('#maandinkomen_partner').show();
            $('#maandinkomen_partner').css({ "display": "flex" });
            $(".form-check-input.maandinkomen_partner").prop('required', true);
        }
    }

    $('#partner_ja').on('click', function() {
        maandinkomenpartnerShow();

    });
    $('#partner_nee').on('click', function() {
        maandinkomenpartnerHide();
    });

    maandinkomenpartnerHide();
    maandinkomenpartnerShow();
});