import { Injectable } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Injectable()
export class AppUtil{

    constructor(private dashboardRouter:Router){

    };

    public closeComponentAndOpenDashboard(){
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

        this.dashboardRouter.navigateByUrl("/dashboard/dashboard1");
    }
}