import { Test, TestingModule } from "@nestjs/testing";
import { UserRepository } from "../../../../src/modules/user/repositories/user.repository";
import { CreateUserService } from "../../../../src/modules/user/services/user-create.service"
import { userMock } from "../mocks/user.mock";

describe('CreateUserService Tests', () => {
    let createUserService: CreateUserService;

    const mockUserRepository = {
        create: jest.fn()
    };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            providers: [CreateUserService,
                {
                    provide: UserRepository,
                    useValue: mockUserRepository,
                }
            ]
        }).compile();

        createUserService = moduleFixture.get<CreateUserService>(CreateUserService);
    });

    it('should be defined', () => {
        expect(createUserService).toBeDefined();
    })

    describe('FUNCTION: execute', () => {
        it('', async () => {
            userMock.name = 'Naruto Uzumaki';
            userMock.email = 'naruto@konoha.com';
            userMock.password = 'ramen123';


            const createdUser = {
                ...userMock,
                id: 'any-id',
                password: 'hashed-password',
            };

            mockUserRepository.create.mockResolvedValue(createdUser);

            const result = await createUserService.execute({ ...userMock});

            expect(result).toEqual(createdUser);
            expect(result.password).not.toEqual(userMock.password);
        });

    })
})