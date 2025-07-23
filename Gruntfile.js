module.exports = function(grunt) {
  // Configuração das tarefas
  grunt.initConfig({
    less: {
      development: {
        files: {
          'build/styles/styles.css': 'source/styles/styles.less'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/js/app.min.js': ['source/js/*.js']
        }
      }
    }
  });

  // Carregar plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefas padrão
  grunt.registerTask('default', ['less', 'uglify']);
};
