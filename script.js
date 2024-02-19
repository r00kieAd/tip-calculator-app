$('.optbutt').click(
    function () {
        const inner_text = $(this).text();
        const tip = inner_text.replace(/%/, '');
        getTip(tip);
    }
)

$('#custom-tip').focus(
    function () {
        getTip($(this).val());
    }
)

$('#bill').focus(
    function () {
        if ($(this).css('border-color') === 'rgb(255, 89, 89)') {
            $(this).css('border-color', 'rgb(38, 192, 171)');
        }

        $('#err1').hide();
    }
)

$('#bill').blur(
    function () {
        $(this).css('border-color', 'transparent');
    }
)

$('#num-of-people').click(
    function () {
        if ($(this).css('border-color') === 'rgb(255, 89, 89)') {
            $(this).css('border-color', 'rgb(38, 192, 171)');
        }

        $('#err2').hide();
    }
)

$('#num-of-people').blur(
    function () {
        $(this).css('border-color', 'transparent');
    }
)

function getTip(tip) {
    // reset error warnings
    $('.labels span').hide();
    // alert(tip);
    // check if there are relavant inputs
    const bill = $('#bill').val();
    const people = $('#num-of-people').val();
    if (!bill || !people) {
        if (!bill) {
            $('#bill-input .labels span').show();
            $('#bill-input input').css('border-color', '#ff5959');
        }
        if (!people) {
            $('#people-input .labels span').show();
            $('#people-input input').css('border-color', '#ff5959');
        }
        return;
    }
    

}
