import { Test, TestingModule } from "@nestjs/testing";
import { FindAllUsersService } from "../../../../src/modules/user/services/user-find-all.service";
import { UserRepository } from "../../../../src/modules/user/repositories/user.repository";
import { userMock } from "../mocks/user.mock";

describe('FindAllUsersService Tests', () => {
    let findAllUsersService: FindAllUsersService;

    const mockUserRepository = {
        findAll: jest.fn()
    };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [ FindAllUsersService,
                {
                    provide: UserRepository,
                    useValue: mockUserRepository,
                },
            ]
        }).compile();

        findAllUsersService = moduleFixture.get<FindAllUsersService>(FindAllUsersService);
    })

    it('should be definied', () => {
        expect(findAllUsersService).toBeDefined();
    })

    describe('Function: execute', () => {
        it('should be find all users successfull', async () => {
            mockUserRepository.findAll.mockResolvedValue([userMock, userMock]);

            const result  = await findAllUsersService.execute();

            expect(mockUserRepository.findAll).toHaveBeenCalledWith();
            expect(result).toEqual([userMock, userMock]);
        });
    });
})