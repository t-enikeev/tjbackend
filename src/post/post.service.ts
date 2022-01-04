import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    return this.postsRepository.save(dto);
  }

  findAll() {
    return this.postsRepository.find();
  }

  findOne(id: number) {
    return this.postsRepository.findOne(id);
  }

  update(id: number, dto: UpdatePostDto) {
    return this.postsRepository.update(id, dto);
  }

  remove(id: number) {
    return this.postsRepository.delete(id);
  }
}
