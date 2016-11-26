/**
 * Created by chanhyeong on 2016-11-21.
 */
import { Component } from '@angular/core';
import { Lecture } from './lecture'
import { LECTURES } from './lecture-data'

@Component({
        selector: 'class-info',
        templateUrl: 'public/javascripts/app/table.component.html',
        template: `<table class="table-fill">
    <thead>
      <tr>
        <th class="code">수강번호</th>
        <th class="department">개설학부</th>
        <th class="major">개설전공</th>
        <th class="category">과목분류</th>
        <th class="title">과목명</th>
        <th class="enTitle">영문 과목명</th>
        <th class="abeek">공학인증</th>
        <th class="point">학점</th>
        <th class="time">시간</th>
        <th class="professor">교수명</th>
        <th class="timetable">강의 시간</th>
        <th class="enLecture">영어 강의</th>
        <th class="total">정원</th>
        <th class="leftSeat">여석</th>
        <th class="add">추가</th>
      </tr>
    </thead>
    <tbody class="table-hover">
    <tr *ngFor="let lecture of lectures">
        <td class="code">{{lecture.code}}</td>
        <td class="department">{{lecture.department}}</td>
        <td class="major">{{lecture.major}}</td>
        <td class="category">{{lecture.category}}</td>
        <td class="title">{{lecture.krTitle}}</td>
        <td class="enTitle">{{lecture.enTitle}}</td>
        <td class="abeek">{{lecture.abeek}}</td>
        <td class="point">{{lecture.point}}</td>
        <td class="time">{{lecture.time}}</td>
        <td class="professor">{{lecture.professor}}</td>
        <td class="timetable">{{lecture.timetable}}</td>
        <td class="enLecture">{{lecture.enLecture}}</td>
        <td class="total">{{lecture.total}}</td>
        <td class="leftSeat"></td>
        <td class="add"></td>
    </tr>
    </tbody>
    </table>
    `
})

export class TableComponent {
    lectures=LECTURES;
}