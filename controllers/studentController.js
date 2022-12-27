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

  static editDoc = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await StudentModel.findById(req.params.id);
      res.render('edit', { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static updateDocById = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    try {
      const result = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    res.redirect('/student');
  };

  static deleteDocById = (req, res) => {
    res.redirect('/student');
  };
}
export default StudentController;
