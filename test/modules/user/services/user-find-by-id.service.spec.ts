import { Test, TestingModule } from "@nestjs/testing";
import { FindUserByIdService } from "../../../../src/modules/user/services/user-find-by-id.service"
import { UserRepository } from "../../../../src/modules/user/repositories/user.repository";
import { userMock } from "../mocks/user.mock";

describe('FindUserByIdService Tests', () => {
    let findUserByIdService: FindUserByIdService;

    const mockUserRepository = {
        findById: jest.fn()
    }

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [ FindUserByIdService,
                {
                    provide: UserRepository,
                    useValue: mockUserRepository,
                }
            ]
        }).compile();

        findUserByIdService = moduleFixture.get<FindUserByIdService>(FindUserByIdService);
    })

    it('should be definied', () => {
        expect(findUserByIdService).toBeDefined();
    })

    describe('Function: execute', () => {
        it('should be find user by id successfull', async () => {
            userMock.id = 1;

            mockUserRepository.findById.mockResolvedValue(userMock);

            const result = await findUserByIdService.execute(1);

            expect(mockUserRepository.findById).toHaveBeenCalledWith(1);
            expect(result).toEqual(userMock);
        })
    })
})