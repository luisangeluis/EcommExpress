import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, registerDecorator, ValidationOptions } from 'class-validator';
import Category from '../models/category';

@ValidatorConstraint({ async: true })
export class IsCategoryExistsConstraint implements ValidatorConstraintInterface {
    async validate(categoryId: string, args: ValidationArguments) {
        if (!categoryId) return true;

        const category = await Category.findByPk(categoryId);
        return !!category;
    }

    defaultMessage(args: ValidationArguments) {
        return `Category with id "${args.value}" does not exist`;
    }
}

export function IsCategoryExists(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsCategoryExistsConstraint,
        });
    };
}