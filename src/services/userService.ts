import type { ApiResponse } from "../types/api.types";
import type { User, UserDto, UserQueryParams } from "../types/user.types";
import api from "./api";

export const userService = {
    async create(data: UserDto): Promise<ApiResponse<User>> {
        const response = await api.post('/users', data);
        return response.data;
    },

    async findAll(params: UserQueryParams = {}): Promise<ApiResponse<User[]>> {
        const response = await api.get('/users', { params });
        return response.data;
    },

    async findOne(id: number): Promise<ApiResponse<User>>{
        const response = await api.get(`/users/${id}`);
        return response.data;
    },

    async update(id: number, data: Partial<Omit<UserDto, 'confirmPassword'>>): Promise<ApiResponse<User>>{
        const response = await api.patch(`/users/${id}`, data);
        return response.data;
    },

    async remove(id: number): Promise<ApiResponse>{
        const response = await api.delete(`/users/${id}`);
        return response.data;
    }
}

export default userService;