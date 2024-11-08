document.addEventListener('DOMContentLoaded', function() {
  const stages = document.querySelectorAll('.stage');

  stages.forEach(function(stage) {
    stage.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });

    stage.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });

    stage.addEventListener('click', function() {
      this.classList.toggle('expanded');
    });
  });
});