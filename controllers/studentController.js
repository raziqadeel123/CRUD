import StudentModel from '../models/StudentModelSchema.js';
class StudentController {
  static createDoc = async (req, res) => {
    console.log(req.body);
    try {
      const { name, age, fees } = req.body;
      const doc = new StudentModel({
        name: name,
        age: age,
        fees: fees,
      });
      // saving docu
      const result = await doc.save();
      console.log(result);
      res.redirect('/student');
    } catch (error) {
      console.log(error);
    }
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
