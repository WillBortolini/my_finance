import { FindUserByIdService } from "../../../../src/modules/user/services/user-find-by-id.service";
import { UpdateUserByIdService } from "../../../../src/modules/user/services/user-update-by-id.service";
import { UserRepository } from "../../../../src/modules/user/repositories/user.repository";
import { Test, TestingModule } from "@nestjs/testing";
import { userMock } from "../mocks/user.mock";

describe('UpdateUserByIdService Tests', () => {
    let updateUserByIdService: UpdateUserByIdService;
    
    const mockUserRepository = {
        updateUserById: jest.fn()
    }

    const mockFindUserByIdService = {
        execute: jest.fn()
    }

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [ UpdateUserByIdService,
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

        updateUserByIdService = moduleFixture.get<UpdateUserByIdService>(UpdateUserByIdService);
    })

    it('should be defined', () => {
        expect(updateUserByIdService).toBeDefined();
    })

    describe('FUNCTION: execute', () => {
        it('should update user successfull', async () => {
            userMock.id = 1;
            userMock.name = 'John';

            const name = 'Other';
            const twoFactorEnabled = true;


            mockFindUserByIdService.execute.mockResolvedValue(userMock);mockUserRepository.updateUserById.mockResolvedValue(undefined);
            
            const result = await updateUserByIdService.execute(1,{name, twoFactorEnabled});

            expect(mockUserRepository.updateUserById).toHaveBeenCalledWith(1,{name, twoFactorEnabled});
            expect(result).toBeUndefined();
        });
    });
})