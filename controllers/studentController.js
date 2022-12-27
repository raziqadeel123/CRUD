import StudentModel from '../models/StudentModelSchema.js';
class StudentController {
  static createDoc = (req, res) => {
    res.redirect('/student');
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      res.render('index', { data: result });
    } catch (error) {
      console.log(error);
    }
    res.render('index');
  };

  static editDoc = (req, res) => {
    res.render('edit');
  };

  static updateDocById = (req, res) => {
    res.redirect('/student');
  };

  static deleteDocById = (req, res) => {
    res.redirect('/student');
  };
}
export default StudentController;
