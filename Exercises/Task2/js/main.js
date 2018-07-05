/*
    INSTRUCTIONS

    The below jQuery snippet has been partially optimized to use a native javasctipt for loop to make some alterations to the html instead of using the jQuery .each() method. What further techniques could be used to make the click event more performant? Please make your changes to the click event below, fork and send us the new link. It's open book, feel free to hit Google but be prepared to explain your improvements.

*/

$('.table__button').click(function() {

  for (var i = 0; i < $('table.table td').length; i++) {

    if (!$($('table.table td')[i]).hasClass('table__cell--disabled')) {
      $($('table.table td')[i]).css(
        'background', $($('table.table td')[i]).attr('data-colour')
      );
      $($('table.table td')[i]).css({'text-decoration': 'underline', 'font-weight': 'bold',
          'text-align': 'center'}).addClass('is--coloured').html('I am now ' + $($('table.table td')[i]).attr('data-colour'));
    }

    $('.table__button').attr('disabled', 'disabled');
  }
});
