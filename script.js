$('.optbutt').click(
    function () {
        const inner_text = $(this).text();
        const tip = inner_text.replace(/%/, '');
        getTip(tip);
    }
)

$('#custom-tip').on("keyup",
    function () {
        getTip($(this).val());
    }
)

$('#bill').focus(
    function () {
        $(this).css('border-color', 'rgb(38, 192, 171)');
        $('#err1').hide();
    }
)

$('#bill').blur(
    function () {
        $(this).css('border-color', 'transparent');
    }
)

$('#num-of-people').focus(
    function () {
        $(this).css('border-color', 'rgb(38, 192, 171)');
        $('#err2').hide();
    }
)

$('#num-of-people').blur(
    function () {
        $(this).css('border-color', 'transparent');
    }
)

$('.reset').click(
    function() {
        $('.reset').prop('disabled', 'true');
        $('.reset').removeClass('enabled-reset');
        $('#bill').val('');
        $('#num-of-people').val('');
        $('#custom-tip').val('');
        $('.tip0').text('$0.00');
        $('.tip1').text('$0.00');
    }
)

$('.tip0').hover(
    function() {
        const amount = $(this).text();
        if (amount.length >= 8) {
            $('.val').text(amount);
            $('.val').fadeIn();
        }
    }, 
    function() {
        $('.val').fadeOut();
    }
)

$('.tip1').hover(
    function() {
        const amount = $(this).text();
        if (amount.length >= 8) {
            $('.val').text(amount);
            $('.val').fadeIn();
        }
    }, 
    function() {
        $('.val').fadeOut();
    }
)

function getTip(tip) {
    $('.labels span').hide();
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
    var t = parseFloat(((tip * bill) / 100).toFixed(2));
    var tip0 = parseFloat((t / people));
    $('.tip0').text('$' + (tip0).toFixed(2));
    t += parseFloat(bill);
    var tip1 = parseFloat((t / people));
    $('.tip1').text('$' + (tip1).toFixed(2));
    reset(true);
}

function reset(enable) {
    if (enable) {
        $('.reset').removeAttr('disabled');
        $('.reset').addClass('enabled-reset');
    }
}
