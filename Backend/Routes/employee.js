const express = require ('express');

const Employee = require('../models/employee');

const router = express.Router();


//Save Employee

router.post('/employee/save' , (req,res) => {

    let newEmployee = new Employee(req.body);

    newEmployee.save((err) => {

        if(err){

            return res.status(400).json({

                error:err
            });
        }

        return res.status(200).json({

            success:"Successfully Employee saved"
        });
    });
});

//get employees

router.get('/employee/employeeall' ,(req,res) => {

    Employee.find().exec((err,employees) => {

        if(err){

          return res.status(400).json({

                error:err
          });
        }

        return res.status(200).json({

            success:true,
            existingEmployees:employees
        });
    });
});


//Get a Relavant Employee
router.get('/employee/empt/:id' , (req,res) => {

    let EmployeeId = req.params.id;

    Employee.findById(EmployeeId , (err,employee) => {

        if(err){

            return res.status(400).json({

                error:err
            });
        }

        return res.status(200).json({

            suceess:true,
            ExistingEmployee:employee
        });
    });
});


//Update an employee
router.put('/employee/employeeupdate/:id' , (req,res) => {

    Employee.findByIdAndUpdate(

        req.params.id,
        {
            $set:req.body
        },

        (err,employee) => {

            if(err) {

                return res.status(400).json({

                    error:err
                });
            }

            return res.status(200).json({

                suceess:"Employee Updated Successfully",
                employee
            });
        }
    );
});

//Delete an employee

router.delete('/employee/employeedelete/:id' , (req,res) => {

    Employee.findByIdAndDelete(req.params.id).exec((err,employee) => {

        if(err){

            return res.status(400).json({

                success:false,
                error:err
            });
        }

        return res.status(200).json({

            success:"Deleted Employee Successfully",
            existingEmployee:employee
        });
    });
});

module.exports = router;