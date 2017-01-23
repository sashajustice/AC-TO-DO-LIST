/*$('#completedBtn').on('click', () => {
  $('.well').css('text-decoration','line-through');
  console.log('strikethrough worked!');
});*/

$('.edit-task').on('click', function() {
  // get the id & pass id to modal
  const projectId = $(this).data('id');
  $('#edit-form-id').val(projectId);
});
