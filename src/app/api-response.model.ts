import { Employee } from './employee.model';
 
export interface ApiResponse {
    success: boolean;
    code: number;
    data: Employee[];
    message: string | null;
}
