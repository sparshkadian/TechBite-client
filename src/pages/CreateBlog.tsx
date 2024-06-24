import { Editor } from '@tinymce/tinymce-react';
import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { blogActions } from '../hooks/blogActions';
import BlogBanner from '../components/BlogBanner';
import { createBannerName } from '../utils/createBannerName';

const CreateBlog = () => {
  const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;
  const fileRef = useRef<HTMLInputElement>(null);
  const { uploadBlogBanner, createBlog } = blogActions();
  const [blogData, setBlogData] = useState({ title: '', content: '' });
  const [file, setFile] = useState<File | null>(null);
  const [banner, setBanner] = useState<string | undefined>();
  const { title, content } = blogData;

  useEffect(() => {
    if (file) {
      const fileName = createBannerName(file);
      uploadBlogBanner(fileName, file, setBanner);
    }

    // set fill to null after uploading
  }, [file]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogData((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { ...blogData, banner };

    // Do some checks -> Title cant be empty, etc
    createBlog(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-6xl mx-auto mt-6 px-5 flex flex-col gap-7'
      >
        <input
          ref={fileRef}
          type='file'
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept='image/*'
        />

        {banner ? (
          <BlogBanner banner={banner} setBanner={setBanner} fileRef={fileRef} />
        ) : (
          <Button
            type='button'
            className='self-start border-2 px-4 py-2 rounded-md shadow-md manrope-semibold hover:bg-gray-100'
            onClick={() => {
              if (fileRef.current) {
                fileRef.current.click();
              }
            }}
          >
            Add Image
          </Button>
        )}
        <input
          type='text'
          value={title}
          id='title'
          onChange={handleInputChange}
          placeholder='New Post Title here...'
          className='h-[50px] manrope-semibold text-3xl focus:outline-none w-[400px]'
        />
        <Editor
          value={content}
          // @ts-ignore
          onChange={handleInputChange}
          id='content'
          apiKey={apiKey}
          init={{
            plugins:
              'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
          }}
        />

        <Button
          type='submit'
          className='manrope-semibold mb-5 purple-blue-gradient w-[100px] text-white py-2 rounded-md shadow-md'
        >
          Publish
        </Button>
      </form>
    </>
  );
};

export default CreateBlog;
