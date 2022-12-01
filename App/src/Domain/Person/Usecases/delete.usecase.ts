/* eslint-disable prettier/prettier */

export abstract class DeleteUseCase {

    abstract execute(id: number): Promise<boolean>

}