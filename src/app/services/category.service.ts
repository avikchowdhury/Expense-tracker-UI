import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
}

export interface VendorCategoryRule {
  id: number;
  categoryId: number;
  categoryName: string;
  vendorPattern: string;
  isActive: boolean;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private apiUrl = '/api/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  addCategory(name: string): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, { name });
  }

  updateCategory(id: number, name: string): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, { id, name });
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getVendorRules(): Observable<VendorCategoryRule[]> {
    return this.http.get<VendorCategoryRule[]>(`${this.apiUrl}/rules`);
  }

  addVendorRule(rule: {
    categoryId: number;
    vendorPattern: string;
    isActive?: boolean;
  }): Observable<VendorCategoryRule> {
    return this.http.post<VendorCategoryRule>(`${this.apiUrl}/rules`, {
      categoryId: rule.categoryId,
      vendorPattern: rule.vendorPattern,
      isActive: rule.isActive ?? true,
    });
  }

  updateVendorRule(
    id: number,
    rule: { categoryId: number; vendorPattern: string; isActive?: boolean },
  ): Observable<VendorCategoryRule> {
    return this.http.put<VendorCategoryRule>(`${this.apiUrl}/rules/${id}`, {
      categoryId: rule.categoryId,
      vendorPattern: rule.vendorPattern,
      isActive: rule.isActive ?? true,
    });
  }

  deleteVendorRule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/rules/${id}`);
  }
}
