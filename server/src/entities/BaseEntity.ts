import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { validate } from "class-validator";

export abstract class BaseEntity {
    public async validateThis(skipMissing = false): Promise<string[]> {
        const errors = await validate(this, {
            skipMissingProperties: skipMissing
        });
        const temp = errors.map(e => Object.values(e.constraints!));
        const result: string[] = [];
        temp.forEach( t => {
            result.push(...t);
        });
        return result;
     }

     protected static baseTransform<T>(cls: ClassType<T>,plainObject: object): T {
        if (plainObject instanceof cls) {
            return plainObject;
        }
        return plainToClass(cls, plainObject);
    }
}