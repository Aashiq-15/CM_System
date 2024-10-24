import { Component } from '@angular/core';
import { Material } from '../../Tools/Material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction-summary',
  standalone: true,
  imports: [Material],
  templateUrl: './transaction-summary.component.html',
  styleUrl: './transaction-summary.component.css'
})
export class TransactionSummaryComponent {

  displayedColumns1: string[] = ['id', 'date','ledger','transection_type','amount','receiptNo','description'];
  displayedColumns2: string[] = ['id', 'date','ledger','transection_type','amount','receiptNo','description'];

  dataSource1!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;

  // @ViewChild('paginator1') paginator1!: MatPaginator;
  // @ViewChild('paginator2') paginator2!: MatPaginator;

  // @ViewChild('sort1') sort1!: MatSort;
  // @ViewChild('sort2') sort2!: MatSort;


  sumaont:number = 0;
  totalCashInAmount="0";
  totalExpensesAmount="0";
  totalCashOutAmount="0";
  totalSummaryAmount="0";
  netAmount="0";
  discountAmount="0";
  amount="0";
  balance="0";

  // studentCollectionForm!: FormGroup;

  // services = ["Rend", "Eletricity", "WaterSupply", "Things", "Others"]
  services:any;
  input: any;
  // constructor(private trasection:ServiceService)
  // {

  // }
  ngOnInit() {

    this.getLedgerList();
    this.getAllCashIn();
    this.getAllCashOutAndExpenses();
    // this.summaryAmountCalculation();

    // this.studentCollectionForm = new FormGroup({
    //   'ledger': new FormControl('1'),
    //   'date1': new FormControl('1'),
    //   'date2': new FormControl('1'),
    // });

  }

  // ngAfterViewInit() {
  //   if (this.dataSource1) {
  //     this.dataSource1.paginator = this.paginator1;
  //     this.dataSource1.sort = this.sort1;
  //   }

  //   if (this.dataSource2) {
  //     this.dataSource2.paginator = this.paginator2;
  //     this.dataSource2.sort = this.sort2;
  //   }
  // }

  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  onDateInput1(event: any) {
    const selectedDate = new Date(event.target.value);
    // Adjusting for timezone offset
    selectedDate.setDate(selectedDate.getDate() + 1);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    // this.studentCollectionForm.patchValue({ date1: formattedDate });
  }

  onDateInput2(event: any) {
    const selectedDate = new Date(event.target.value);
    // Adjusting for timezone offset
    selectedDate.setDate(selectedDate.getDate() + 1);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    // this.studentCollectionForm.patchValue({ date2: formattedDate });
  }

  getLedgerList() {
    this.services = ["Rend", "Eletricity", "WaterSupply", "Things", "Others"];

  }

  onOptionsSelectedForLedger()
  {
    // const formValue = this.studentCollectionForm.value;
    // this.lecturerAttandanceForm.patchValue({
    //   'lecturerName':  formValue.lecturerId.lecturerName
    // })

    // this.formDatas[0].lecturerId = formValue.lecturerId.lecturerId;
    // this.formDatas[0].lecturerName = formValue.lecturerId.lecturerName;

    // alert(this.studentCollectionForm.value);
    // console.log(formValue);
    this.getCashInByDateAndLedger();
    this.getCashOutAndExpensesByDateAndLedger();
    // this.summaryAmountCalculation();

  }


  getAllCashIn(){
    // this.trasection.get_all_cash_in().subscribe({
    //   next: (res) => {
    //     this.dataSource1 = new MatTableDataSource(res['message']);
    //     this.dataSource1.sort = this.sort1;
    //     this.dataSource1.paginator = this.paginator1;
    //     this.totalCashInAmount = res['sumAmount']
    //   },
    //   error: console.log,
    // });
  }

  getCashInByDateAndLedger(){
    // this.trasection.get_filter_cash_in(this.studentCollectionForm.value).subscribe({
    //   next: (res) => {
    //     this.dataSource1 = new MatTableDataSource(res['message']);
    //     this.dataSource1.sort = this.sort1;
    //     this.dataSource1.paginator = this.paginator1;

    //     this.totalCashInAmount = res['sumAmount']
    //   },
    //   error: console.log,
    // });
  }

  getCashOutAndExpensesByDateAndLedger(){
    // this.trasection.get_filter_cash_out_ant_expenses(this.studentCollectionForm.value).subscribe({
    //   next: (res) => {
    //     this.dataSource2 = new MatTableDataSource(res['message']);
    //     this.dataSource2.sort = this.sort2;
    //     this.dataSource2.paginator = this.paginator2;

    //     this.totalExpensesAmount = res['ExpensesOnlysumAmount']
    //     this.totalCashOutAmount = res['CashOutOnlyOnlysumAmount']
    //     this.sumaont  = (+this.totalCashInAmount) - ((+this.totalExpensesAmount) + (+this.totalCashOutAmount));
    //     this.totalSummaryAmount = String(this.sumaont)
    //   },
    //   error: console.log,
    // });
  }

  getAllCashOutAndExpenses(){
    // this.trasection.get_all_cash_out_ant_expenses().subscribe({
    //   next: (res) => {
    //     this.dataSource2 = new MatTableDataSource(res['message']);
    //     this.dataSource2.sort = this.sort2;
    //     this.dataSource2.paginator = this.paginator2;
    //     this.totalExpensesAmount = res['ExpensesOnlysumAmount']
    //     this.totalCashOutAmount = res['CashOutOnlyOnlysumAmount']
    //     this.sumaont  = (+this.totalCashInAmount) - ((+this.totalExpensesAmount) + (+this.totalCashOutAmount));
    //     this.totalSummaryAmount = String(this.sumaont)
    //   },
    //   error: console.log,
    // });

  }

  summaryAmountCalculation()
  {
    // this.getAllCashIn();
    // this.getAllCashOutAndExpenses();
    // this.totalSummaryAmount = this.totalCashInAmount - (this.totalExpensesAmount + this.totalCashOutAmount);
    this.sumaont  = (+this.totalCashInAmount) - ((+this.totalExpensesAmount) + (+this.totalCashOutAmount));
    this.totalSummaryAmount = String(this.sumaont)
    alert(this.totalCashInAmount);
  }

}
