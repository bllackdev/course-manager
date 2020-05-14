import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'April, 8, 2020'
            },
            {
                id: 2,
                name: 'JavaScript: ES6',
                imageUrl: '',
                price: 88.99,
                code: 'LKL-1094',
                duration: 100,
                rating: 4, 
                releaseDate: 'May, 15, 2020'
            }

        ]
    }

}