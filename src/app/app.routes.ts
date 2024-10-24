import { Routes } from '@angular/router';
import { ProgrammComponent } from './Main/programm/programm.component';
import { AddStudentComponent } from './Students/add-student/add-student.component';
import { StudentCollectionComponent } from './Students/student-collection/student-collection.component';
import { ViewStudentsComponent } from './Students/view-students/view-students.component';
import { AddLecturerComponent } from './lecturer/add-lecturer/add-lecturer.component';
import { AttandanceSheetComponent } from './lecturer/attandance-sheet/attandance-sheet.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddEditTransactionComponent } from './transaction/add-edit-transaction/add-edit-transaction.component';
import { TransactionSummaryComponent } from './transaction/transaction-summary/transaction-summary.component';
import { ViewTransactionComponent } from './transaction/view-transaction/view-transaction.component';
import { ViewEmployeePaymentComponent } from './payroll/employee-payment/view-employee-payment/view-employee-payment.component';
import { ViewLecturerPaymentComponent } from './payroll/lecturer-payment/view-lecturer-payment/view-lecturer-payment.component';
import { SubjectComponent } from './Main/subject/subject.component';
import { CityComponent } from './Main/city/city.component';
import { CountryComponent } from './Main/country/country.component';
import { TownComponent } from './Main/town/town.component';
import { ViewLecturerComponent } from './lecturer/view-lecturer/view-lecturer.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';

export const routes: Routes = [
  //main components
  {path:'programm',component:ProgrammComponent},
  {path:'subject',component:SubjectComponent},
  {path:'city',component:CityComponent},
  {path:'country',component:CountryComponent},
  {path:'town', component:TownComponent},


  //students component
  {path:'addStudent',component:AddStudentComponent},
  {path:'pendingStudent', component:ViewStudentsComponent},
  // {path:'registerStudent',component:},
  {path:'studentCollection',component:StudentCollectionComponent},


  //lecturer components
  {path:'addLecturer',component:AddLecturerComponent},
  {path:'viewLecturer', component:ViewLecturerComponent},
  {path:'attendance',component:AttandanceSheetComponent},


  //employee component
  {path:'addEmployee', component:AddEmployeeComponent},
  {path:'viewEmployee',component:ViewEmployeeComponent},


  //Transactions summary
  {path:'transaction',component:ViewTransactionComponent},
  {path:'transactionSummary',component:TransactionSummaryComponent},

  //payroll components
  {path:'employeePayment',component:ViewEmployeePaymentComponent},
  {path:'lecturerPayment',component:ViewLecturerPaymentComponent}
];
