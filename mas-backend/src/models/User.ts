import {Column, CreateDateColumn, Entity,PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';

@Entity("users")
class User{

    constructor(){
        if(!this.id){
            this.id=uuid()
        }
    

}
    @PrimaryColumn()
    readonly id:string;

    @Column()
    name: string;
    
    @Column()
    email: String;
    
    @Column()
    password: string;
    
    @CreateDateColumn()
    create_at:Date;
}

export {User}