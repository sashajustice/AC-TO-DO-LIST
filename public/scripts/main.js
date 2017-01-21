$('.edit-task').on('click', () => {
  $('#edit-form-name').val($(this).data('name'));
  $('#edit-form-directions').val($(this).data('directions'));
  $('#edit-form-id').val($(this).data('id'));
});

$('#completedBtn').on('click', () => {
  $('.well').css('text-decoration','line-through');
  console.log('strikethrough worked!');
});
