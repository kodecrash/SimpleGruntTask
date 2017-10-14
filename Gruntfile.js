module.exports = function(grunt){


  grunt.registerTask('logTask', function() {
    console.log('Inside Log Task');
  });

  grunt.registerTask('formatTask', function() {
    console.log('Inside format Task');
  });

  grunt.registerTask('runAllTasks', function() {
    grunt.task.run('logTask');
    grunt.task.run('formatTask');
  });


};



// grunt.initConfig({
//   concat: {
//      js:{
//        src: ['js/*.js'],
//        dest:'build/script.js'
//      },
//      css:{
//        src: ['css/*.css'],
//        dest:'build/style.css'
//      }
//   }
// });

// grunt.loadNpmTasks('grunt-contrib-concat');

// grunt.registerTask('concat-js',['concat:js']);
// grunt.registerTask('concat-css',['concat:css']);
