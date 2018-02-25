import { Component, ViewEncapsulation, Input, OnInit  } from '@angular/core';
import { Routes, Router } from '@angular/router';
import * as alertFunctions from './../../shared/data/sweet-alerts';
import { Route } from '@angular/compiler/src/core';

declare var require: any;
const data: any = require('../../shared/data/company.json');

@Component({
    selector: 'app-modulemaster',
    templateUrl: './modulemaster.component.html',
    styleUrls: ['./modulemaster.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ModuleMasterComponent implements OnInit{
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

    constructor(private router: Router) {
        this.rows = data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }

    ngOnInit() {
        $("#formDiv").hide();
        $("#tableDiv").show();
    }

    addNewBtnAction() {
        if ($(".addNewBtn").html() == '<i class="fa fa-caret-left"></i>&nbsp; Go Back') {
            $("#formDiv").hide();
            $("#tableDiv").show(1000);
            $(".addNewBtn").removeClass('btn-success').addClass('btn-primary');
            $(".addNewBtn").html('Add New &nbsp;<i class="fa fa-plus"></i>')
        } else {
            //this.clearFormBtnAction();
            $("#formDiv").show(1000);
            $("#tableDiv").hide();
            $(".addNewBtn").removeClass('btn-primary').addClass('btn-success');
            $(".addNewBtn").html('<i class="fa fa-caret-left"></i>&nbsp; Go Back')
        }
    }

    closePageBtnAction() {

        if ($('.wrapper').hasClass('nav-collapsed')) {
            $('.navigation').find('li').each(function () {
                $(this).removeClass('nav-collapsed-open');
                $(this).find('ul').find('li').each(function () {
                    $(this).removeClass('is-shown');
                    $(this).removeClass('active');
                });
            });
            $('.navigation').find('li:eq(0)').addClass('nav-collapsed-open');
        } else {
            $('.navigation').find('li').each(function () {
                $(this).removeClass('open');
                $(this).find('ul').find('li').each(function () {
                    $(this).removeClass('is-shown');
                    $(this).removeClass('active');
                });
            });
            $('.navigation').find('li:eq(0)').addClass('open');
        }
        $('.navigation').find('li:eq(0)').find('ul').find('li:eq(0)').addClass('active').addClass('is-shown');
        $('.navigation').find('li:eq(0)').find('ul').find('li').each(function () {
            $(this).addClass('is-shown');
        });
        this.router.navigateByUrl("/dashboard/dashboard1");
    }

    clearFormBtnAction() {
        alert("cleared...");
    }

    saveFormBtnAction() {
        // swal({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#0CC27E',
        //     cancelButtonColor: '#FF586B',
        //     confirmButtonText: 'Text Changed',
        //     cancelButtonText: "No, cancel"
        // }).then(function (isConfirm) {
        //     if (isConfirm) {
        //         swal(
        //             'Changed!',
        //             'Confirm button text was changed!!',
        //             'success'
        //         );
        //     }
        // }).catch(swal.noop);
        alertFunctions.confirmCancelButton();
    }

    closeFromBtnAction() {
        alert("closed...");
    }
}