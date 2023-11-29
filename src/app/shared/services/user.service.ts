import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@core/services/base.service';

@Injectable({
    providedIn: 'root',
})
export class UserService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    getAllUsers(id) {
        return this.http.get(`${this.baseUrl}/api/get-all-users?id=${id}`);
    }

    createNewUser(data) {
        return this.http.post(`${this.baseUrl}/api/create-new-user`, data);
    }

    editUser(data) {
        return this.http.put(`${this.baseUrl}/api/edit-user`, data);
    }

    deleteUser(id) {
        return this.http.delete(`${this.baseUrl}/api/delete-user`, {
            body: { id },
        });
    }

    getAllCode(type) {
        return this.http.get(`${this.baseUrl}/api/allcode?type=${type}`);
    }

    getDoctorHome(limit) {
        return this.http.get(`${this.baseUrl}/api/top-doctor-home?limit=${limit}`);
    }

    getAllDoctors() {
        return this.http.get(`${this.baseUrl}/api/get-all-doctors`);
    }

    saveDetailDoctor(data) {
        return this.http.post(`${this.baseUrl}/api/save-info-doctor`, data);
    }

    getDetailInfoDoctor(id) {
        return this.http.get(`${this.baseUrl}/api/get-detail-doctor-by-id?id=${id}`);
    }

    saveBulkScheduleDoctor(data) {
        return this.http.post(`${this.baseUrl}/api/bulk-create-schedule`, data);
    }

    getSchedulesDoctorByDate(doctorId, date) {
        return this.http.get(`${this.baseUrl}/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`);
    }

    getExtraInfoDoctorById(doctorId) {
        return this.http.get(`${this.baseUrl}/api/get-extra-info-doctor-by-id?doctorId=${doctorId}`);
    }

    getProfileDoctorById(doctorId) {
        return this.http.get(`${this.baseUrl}/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
    }

    postPatientBookAppointment(data) {
        return this.http.post(`${this.baseUrl}/api/patient-book-appointment`, data);
    }

    postVerifyBookAppointment(data) {
        return this.http.post(`${this.baseUrl}/api/verify-book-appointment`, data);
    }

    createNewSpecialty(data) {
        return this.http.post(`${this.baseUrl}/api/create-new-specialty`, data);
    }

    getAllSpecialty() {
        return this.http.get(`${this.baseUrl}/api/get-all-specialty`);
    }
}
