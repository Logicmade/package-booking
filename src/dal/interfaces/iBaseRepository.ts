import { DeleteResult } from "typeorm";

export default interface IBaseRepository<T> {
    create(item: T): Promise<T>;
    update(item: T): Promise<T>;

    delete(id: string): Promise<T>;
    hardDelete(id: string): Promise<DeleteResult>;
    find(whereClause: object): Promise<T[]>;
    findOne(id: string): Promise<T>;
}