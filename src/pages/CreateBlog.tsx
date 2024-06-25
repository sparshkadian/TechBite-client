import { Editor } from '@tinymce/tinymce-react';
import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { blogActions } from '../hooks/blogActions';
import BlogBanner from '../components/BlogBanner';
import { createBannerName } from '../utils/createBannerName';
import toast from 'react-hot-toast';

const CreateBlog = () => {
  const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;
  const fileRef = useRef<HTMLInputElement>(null);
  const { uploadBlogBanner, createBlog } = blogActions();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  // @ts-ignore
  const [text, setText] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [banner, setBanner] = useState<string | undefined>();

  useEffect(() => {
    const uploadBanner = async (file: File) => {
      toast('Uploading Blog Image', {
        style: {
          backgroundColor: 'black',
          color: 'white',
        },
      });
      const fileName = createBannerName(file);
      await uploadBlogBanner(fileName, file, setBanner);
      toast('Blog Image Uploaded', {
        style: {
          backgroundColor: 'black',
          color: 'white',
        },
      });
      setFile(null);
    };
    if (file) {
      uploadBanner(file);
    }
  }, [file]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onEditorInputChange = (newValue: string, editor: any) => {
    setText(newValue);
    setContent(editor.getContent({ format: 'text' }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { title, content, banner };
    if (title === '') {
      toast('Blog must have a Title', {
        style: {
          backgroundColor: '#ef4444',
          color: 'white',
          fontWeight: '600',
        },
      });
      return;
    }
    createBlog(formData);
    setText('');
    setContent('');
    setTitle('');
    setBanner('');
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
          onChange={handleTitleChange}
          placeholder='New Post Title here...'
          className='h-[50px] manrope-semibold text-3xl focus:outline-none w-[400px]'
        />
        <Editor
          value={content}
          onEditorChange={(newValue, editor) =>
            onEditorInputChange(newValue, editor)
          }
          onInit={(_, editor) => setText(editor.getContent({ format: 'text' }))}
          apiKey={apiKey}
          init={{
            plugins:
              'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
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
