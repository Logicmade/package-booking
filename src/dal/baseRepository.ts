import "reflect-metadata";
import { getConnection, Connection, Repository, DeleteResult } from "typeorm";
import IBaseRepository from './interfaces/iBaseRepository'


export abstract class BaseRepository<T> implements IBaseRepository<T> {
    private conn: Connection;
    private baseRepo: Repository<T>;
    private value: any;
    
    constructor(value: any) {
        this.value = value;
    }

    private getRepo = async (entity) => {
        this.conn = await getConnection()
        this.baseRepo = this.conn.getRepository(entity);

    }

    public async create(item: T): Promise<T> {
        await this.getRepo(this.value);
    
        const baseData =  this.baseRepo.create(item);
        const results = await this.baseRepo.save(baseData);
        return results;
    }
    public async update(item: T): Promise<T> {
        const results = await this.baseRepo.save(item);
        return results;
    }
    
    public async delete(id: string): Promise<T> {
        await this.getRepo(this.value);
        const baseData = await this.baseRepo.findOne(id);
        if(baseData){
//            this.baseRepo.softDelete(baseData);
            baseData["isDeleted"] = true;
            const results = await this.baseRepo.save(baseData);
            return results;
        }
        return baseData;
    }

    public async hardDelete(id: string): Promise<DeleteResult> {
        await this.getRepo(this.value);
        const baseData = await this.baseRepo.findOne(id);
        if(baseData){
            const results = await this.baseRepo.delete(baseData);
            return results;
        }
        return null
    }

    public async find(whereClause: object): Promise<T[]> {
        await this.getRepo(this.value);
        whereClause["isDeleted"] = false;
        const results = await (await this.baseRepo.find({ where: whereClause }));
        return results;
    }
    public async findOne(id: string): Promise<T> {
        await this.getRepo(this.value);
        const baseData = await this.baseRepo.findOne(id);
        return baseData;
    }


}
