function main() {
  $('.fruits').hide();
  $('.colours').hide();
  $('.fruits').slideToggle(1000);
  $('.colours').slideToggle(1000);

  $('.FF').hide();
  $('.spectrum').hide();

  $('.fruits').on('click', function() {
    $(this).toggleClass('button-pressed');
    $(this).text('FAVOURITE FRUITS');
    $(this).next().slideToggle(400);

	});

  $('.colours').on('click', function() {
    $(this).toggleClass('button-pressed');
    $(this).text('COLOURS OF THE SPECTRUM');
    $(this).next().slideToggle(400);

  });

}

$(document).ready(main);
