import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import swal from 'sweetalert2';

declare var require: any;
const data: any = require('../../shared/data/company.json');

@Component({
    selector: 'app-menumaster',
    templateUrl: './menumaster.component.html',
    styleUrls: ['./menumaster.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MenuMasterComponent implements OnInit{
    rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    // DataTable Content Titles
    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];

    closeResult: string;

    constructor() {
        this.rows = data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }

    ngOnInit(){
        $("#formDiv").hide();
        $("#tableDiv").show();
    }

    
    addNewBtnAction(){
        if($(".addNewBtn").html()=='<i class="fa fa-caret-left"></i>&nbsp; Go Back'){
            $("#formDiv").hide();
            $("#tableDiv").show(1000);
            $(".addNewBtn").removeClass('btn-success').addClass('btn-primary');
            $(".addNewBtn").html('Add New &nbsp;<i class="fa fa-plus"></i>')
        }else{
            //this.clearFormBtnAction();
            $("#formDiv").show(1000);
            $("#tableDiv").hide();
            $(".addNewBtn").removeClass('btn-primary').addClass('btn-success');
            $(".addNewBtn").html('<i class="fa fa-caret-left"></i>&nbsp; Go Back')
        }
    }

    closePageBtnAction(){

    }


    clearFormBtnAction(){
        alert("cleared...");
    }

    saveFormBtnAction(){
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Text Changed',
            cancelButtonText: "No, cancel"
        }).then(function (isConfirm) {
            if (isConfirm) {
                swal(
                    'Changed!',
                    'Confirm button text was changed!!',
                    'success'
                );
            }
        }).catch(swal.noop);
    }

    closeFromBtnAction(){

    }
}