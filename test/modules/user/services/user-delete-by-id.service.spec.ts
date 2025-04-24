import { Test, TestingModule } from "@nestjs/testing";
import { UserRepository } from "../../../../src/modules/user/repositories/user.repository";
import { DeleteUserByIdService } from "../../../../src/modules/user/services/user-delete-by-id.service";
import { FindUserByIdService } from "../../../../src/modules/user/services/user-find-by-id.service";
import { userMock } from "../mocks/user.mock";

describe('DeleteUserByIdService Tests', () => {
    let deleteUserByIdService: DeleteUserByIdService

    const mockUserRepository = {
        deleteUserById: jest.fn()
    };

    const mockFindUserByIdService = {
        execute: jest.fn()
    }

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [ DeleteUserByIdService,
                {
                    provide: UserRepository,
                    useValue: mockUserRepository,
                },
                {
                    provide: FindUserByIdService,
                    useValue: mockFindUserByIdService,
                },
            ]
        }).compile();

        deleteUserByIdService = moduleFixture.get<DeleteUserByIdService>(DeleteUserByIdService);
    })

    it('should be defined', () => {
        expect(deleteUserByIdService).toBeDefined();
    })

    describe('FUNCTION: execute', () => {
        it('should delete user successfull', async () => {
            userMock.id = 1;
            userMock.name = 'John';

            mockFindUserByIdService.execute.mockResolvedValue(userMock);mockUserRepository.deleteUserById.mockResolvedValue(undefined);
            
            const result = await deleteUserByIdService.execute(1);

            expect(mockFindUserByIdService.execute).toHaveBeenCalledWith(1);
            expect(mockUserRepository.deleteUserById).toHaveBeenCalledWith(1);
            expect(result).toBeUndefined();
        });
    })
})